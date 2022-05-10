interface ITypography {
  children: React.ReactNode;
  className?: string;
}

export function Heading3(props: ITypography) {
  return (
    <h3
      className={`mb-2 text-center font-serif text-lg font-extrabold text-slate-800 ${
        props.className || ''
      }`}
    >
      {props.children}
    </h3>
  );
}
