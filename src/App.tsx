import { useEffect, useState } from 'react';

import { Result } from '@/core/interfaces';
import { UserList } from '@/components'
import { UrlApiRamdom } from '@/core/constants';

function App(): JSX.Element {
  const [users, setUsers] = useState<Result[]>([]);

  useEffect(() => {
    fetch(UrlApiRamdom)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <>
      <main className="h-screen w-screen overflow-hidden bg-zinc-900 text-white p-8 flex flex-col gap-8">
          <h1 className="text-4xl text-center font-bold">Hola mundo</h1>

          <div className="w-full">
            {<UserList users={users} />}
          </div>
      </main>
    </>
  );
}

export default App;
