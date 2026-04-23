/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
