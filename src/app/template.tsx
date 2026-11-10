// A template (unlike a layout) re-mounts on every navigation, so the page
// content fades in each time you switch pages. The header and footer live in
// layout.tsx, so they stay put while only the page content transitions.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
