import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';

type CardProps = {
  header?: ReactNode,
  footer? : ReactNode,
  href?: string,
}

const WCard: FunctionComponent<CardProps> = ({ header, footer, href, children }) => 
  <div
    className="bg-white dark:bg-gray-black dark:text-white border-black dark:border-gray-dark rounded-lg border-4 border-b-12 flex flex-col justify-between"
  >
    { !!header &&
      <header>
        {header}
      </header>
    }
    <main className="p-4">
      {children}
    </main>
    { !!footer &&
      <footer className="p-4 border-t">
        {footer}
      </footer>
    }
    { (!footer && !!href) &&
      <footer className="border-t">
        <Link href={href}>
          <a className="link p-4 block w-full hover:underline hover:bg-gray-white dark:hover:bg-black">
            Read more
          </a>
        </Link>
      </footer>
    }
  </div>

  export default WCard;