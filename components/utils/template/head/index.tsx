import Head from "next/head"

export const CustomHead = () => {
    return (
        <Head>
            <title>Infor Gerencial</title>

            <meta charSet="utf-8" />
            <meta name="author" content="Infor Gerencial" />
            <meta name="keywords" content="Sistema de Gestão" />
            <meta name="description" content="Gerencie sua empresa de forma simples, emita notas e cupons fiscais com poucos cliques." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow, all" />

            {/* open graph protocol tags */}
            <meta property="og:title" content="Infor Gerencial" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.inforgerencial.com.br/conheca/" />
            <meta property="og:image" content="https://www.godevcompany.com.br/assets/icon.png" />
            <meta property="og:image:secure_url" content="https://www.godevcompany.com.br/assets/icon.png" />
            <meta property="og:image:alt" content="LeadDev logo image" />
        

          

            <link rel="icon" href="./assets/icon.jpg" />
        </Head>
    )
}