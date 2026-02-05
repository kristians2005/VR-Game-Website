interface GridBackgroundProps {
  children?: React.ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full bg-red-300 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6b7280 1px, transparent 1px),
            linear-gradient(to bottom, #6b7280 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
