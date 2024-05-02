import { AppPropsWithLayout } from '@/models';
import { CssBaseline } from '@mui/material';
import PageTransition from '@/components/loading/page-transition';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <>
            <CssBaseline />

            <PageTransition >
                <Component {...pageProps} />
            </PageTransition>
        </>
    );
}
