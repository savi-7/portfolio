export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-white/5 text-center px-6">
      <p className="text-textMuted text-xs font-mono uppercase tracking-widest">
        © {new Date().getFullYear()} Savio Joseph — Architecture & Logic
      </p>
    </footer>
  );
}
