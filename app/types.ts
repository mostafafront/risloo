type Avatar = {
  id: string;
  file_name: string;
  slug: string;
  mode: string;
  url: string;
  type: string;
  mime: string;
  exec: string;
};

interface Manager {
  id: string;
  name: string;
  user_id: string;
  avatar: Avatar[];
}

interface Detail {
  title: string;
  description: string;
  address: string;
  avatar: Avatar[];
  phone_numbers: string[];
}

export default interface Item {
  id: string;
  manager: Manager;
  acceptation: null;
  status: string;
  type: string;
  detail: Detail;
  created_at: number;
}
