import Link from 'next/link';
import {Fragment, useState} from 'react';
const navigation = [
  {name: 'Login', href: '/auth/login', current: true},
  {name: 'Register', href: '/auth/register', current: false},
  {name: 'Post', href: '/posts', current: false},
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setNavBarItem] = useState('Login');
  return (
    <div className="flex items-center justify-center sm:items-stretch sm:justify-center bg-gray-400">
      <div className=" sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navigation.map(item => (
            <div
              onClick={() => setNavBarItem(item.name)}
              className={classNames(
                item.name == selected
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium',
              )}>
              <Link
                key={item.name}
                href={item.href}

                //   aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
