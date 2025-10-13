const AboutusDetail = () => {
  return (
    <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="max-w-xl w-full">
            <h2 className="text-4xl font-bold">Grow With Sadeed</h2>
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-secondary dark:text-white">
              At <strong>Grow With Sadeed</strong>, we believe financial freedom
              begins with the right knowledge and strategy. Our mission is to
              help individuals, families, and business owners make smarter
              financial decisions—whether it’s protecting their income, reducing
              taxes, or building wealth for the future.
            </p>
            <p className="text-secondary dark:text-white">
              We provide a wide range of financial services, including insurance
              planning, investment solutions, tax strategies, and retirement
              planning. Through <strong>World Financial Group (WFG)</strong>, we
              empower clients to create multiple income streams and secure
              lasting financial independence. At GWS, we don’t just manage
              money—we build a vision for your future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusDetail;
