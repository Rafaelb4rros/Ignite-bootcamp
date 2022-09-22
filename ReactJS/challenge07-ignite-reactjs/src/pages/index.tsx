import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

type Image = {
    title: string;
    description: string;
    url: string;
    ts: number;
    id: string;
};

type ImagesResponse = {
    data: Image[];
    after: string;
};

export default function Home(): JSX.Element {
    const getImages = async ({ pageParam = null }): Promise<ImagesResponse> => {
        const { data } = await api.get('/api/images', {
            params: {
                after: pageParam,
            },
        });

        return data;
    };

    const {
        data,
        isLoading,
        isError,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery('images', getImages, {
        getNextPageParam: (lastPage, pages) => lastPage.after ?? null,
    });

    const formattedData = useMemo(() => {
        return data?.pages.flatMap(page => {
            return page.data.flat();
        });
    }, [data]);

    if (isLoading) return <Loading />;

    if (isError) return <Error />;

    return (
        <>
            <Header />

            <Box maxW={1120} px={20} mx="auto" my={20}>
                <CardList cards={formattedData} />
                {hasNextPage && (
                    <Button mt={5} onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
                    </Button>
                )}
            </Box>
        </>
    );
}
