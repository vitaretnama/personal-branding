import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import MediaMassa from "../components/MediaMassa";

export default function Home() {
  return (
    <>
      <SeoHead title="Sam Andreas" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <MediaMassa />
      </Layout>
    </>
  );
}
