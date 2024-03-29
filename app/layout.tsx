import '@/src/app/style/globals.css';
import Layout from '@/src/widgets/layout/ui/layout';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { XION_NEXT_FONT } from '@/src/app/style/font';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { ENV } from '@/src/shared/config/env';
import { Providers } from '@/src/app/provider/providers';
import { SideBar } from '@/src/widgets/sidebar';
export const metadata: Metadata = {
  title: {
    default: 'xionhub',
    template: '%s - xionhub',
  },
  description: 'xion blog',
  verification: {
    google: 'DRsMbGmtMLi04daO_7HJa3kCHtYnVaFl4dUXNzyGm1c',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${XION_NEXT_FONT.className} `}>
        <Providers>
          <Layout>{children}</Layout>
          <SideBar />
        </Providers>
        <Analytics />
        <GoogleTagManager gtmId={ENV.gtmId} />
        <GoogleAnalytics gaId={ENV.gaId} />
      </body>
    </html>
  );
}
