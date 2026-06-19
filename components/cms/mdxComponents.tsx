import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="mt-12 text-balance text-3xl font-semibold tracking-tight text-white" {...props} />,
  h2: (props) => <h2 className="mt-12 text-balance text-2xl font-semibold tracking-tight text-white" {...props} />,
  h3: (props) => <h3 className="mt-10 text-balance text-xl font-semibold tracking-tight text-white" {...props} />,
  p: (props) => <p className="mt-4 text-base leading-relaxed text-muted" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted marker:text-accent" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted marker:text-accent" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => <a className="text-accent underline-offset-4 hover:underline" {...props} />,
  code: (props) => (
    <code
      className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.9em] text-accent"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-5 font-mono text-sm leading-relaxed text-white"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-accent/60 pl-5 italic text-muted"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-white/[0.08]" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
};
