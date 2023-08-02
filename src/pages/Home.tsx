import { useEffect, useState } from 'react';

import { Result } from '@/core/interfaces';
import { UserList } from '@/components';
import { UrlApiRamdom } from '@/core/constants';

export default function Main() {
  const [users, setUsers] = useState<Result[]>([]);

  useEffect(() => {
    fetch(UrlApiRamdom)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  
  return (
    <>
      <h1 className="title-h1">Hola mundo</h1>

      <div className="w-full">{<UserList users={users} />}</div>
    </>
  );
}
