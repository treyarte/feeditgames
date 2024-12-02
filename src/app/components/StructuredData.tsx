import Head from "next/head";


export const StructuredData = () => {    

    const structuredData = {	
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Feed It Games",
        "alternateName": ["Feed It Games"],
        "url": "https://feeditgames.com/",
    }

    return (
        <Head>
            <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            />                        
        </Head>
    )
}