import Head from "next/head"

export const CustomHead = () => {
    return (
        <Head>
            <title>LeaDevCompany</title>

            <meta charSet="utf-8" />
            <meta name="author" content="LeaDev" />
            <meta name="keywords" content="sites, web, desenvolvimento, development" />
            <meta name="description" content="Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia com a LeaDevCompany. " />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow, all" />

            {/* open graph protocol tags */}
            <meta property="og:title" content="LeaDev" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://Leaw.godevcompany.com.br" />
            <meta property="og:image" content="https://www.godevcompany.com.br/assets/icon.png" />
            <meta property="og:image:secure_url" content="https://www.godevcompany.com.br/assets/icon.png" />
            <meta property="og:image:alt" content="LeaDev logo image" />
            <meta property="og:description" content="Construa a tecnologia do seu negócio com rapidez, qualidade e sem burocrácia com a LeaDev. " />
            <meta property="og:site_name" content="LeaDev" />
            <meta property="og:locale" content="pt_BR" />


            <link rel="canonical" href="https://www.godevcompany.com.br" key="canonical" />

            <link rel="icon" href="./assets/icon.png" />
        </Head>
    )
}