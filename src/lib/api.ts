export async function fetchMenuItems() {
    const res = await fetch('/api/menu', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch menu');
    return res.json() as Promise<MenuItem[]>;
  }
  export interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    active: boolean;
  }
  