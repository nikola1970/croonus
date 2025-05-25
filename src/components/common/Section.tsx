type SectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Section(props: SectionProps) {
  const { title, children } = props;

  return (
    <div className="mt-18 xl:mt-30">
      <div className="container">
        <h2 className="mb-10 text-4xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}
