import { AppPropsWithLayout } from '@/models';
import { CssBaseline } from '@mui/material';
import PageTransition from '@/components/Loading/PageTransition';

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
