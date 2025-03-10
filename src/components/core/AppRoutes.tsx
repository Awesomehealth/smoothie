
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AppRoutes = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Initial path routing logic
    if (pathname === '/') {
      // Already on home page, no need to redirect
    }
  }, [pathname]);

  return null; // This component doesn't render anything, it just handles routing
};

export default AppRoutes;
