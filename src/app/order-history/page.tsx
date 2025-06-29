"use client";

import { Navbar, Footer } from "@/components";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { FiClock, FiShoppingBag, FiPhone } from 'react-icons/fi';

interface OrderHistoryItem {
  orderId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: string;
  }>;
  total: number;
  orderTime: string;
  userEmail: string;
  phoneNumber: string;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    }

    if (session?.user?.email) {
      const savedOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      const userOrders = savedOrders.filter(
        (order: OrderHistoryItem) => order.userEmail === session.user?.email
      );
      setOrders(userOrders);
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Your Order History
            </h2>

            {orders.length === 0 ? (
              <div className="text-center py-12">
                <FiShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h5 className="text-xl mb-2">
                  No Orders Yet
                </h5>
                <p className="text-gray-600 mb-4">
                  You haven't placed any orders yet.
                </p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => router.push('/menu-page')}
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h6 className="text-base font-semibold">
                          Order #{order.orderId}
                        </h6>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <FiClock className="h-4 w-4" />
                          <span className="text-sm">
                            {new Date(order.orderTime).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <FiPhone className="h-4 w-4" />
                          <span className="text-sm">
                            {order.phoneNumber}
                          </span>
                        </div>
                      </div>
                      <span className="bg-green-500 text-white px-2 py-1 rounded">Completed</span>
                    </div>

                    <div className="border-t border-b border-gray-200 py-4 mb-4">
                      {order.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">
                              {item.quantity}x
                            </span>
                            <span className="text-gray-600">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-gray-600">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <h6 className="text-base font-semibold">
                        Total
                      </h6>
                      <span className="text-base font-semibold">
                        ₹{order.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 