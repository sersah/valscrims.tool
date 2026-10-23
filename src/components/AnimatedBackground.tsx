const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 6.7 + 3.3) % 100}%`,
    top: `${(i * 13.7 + 7.1) % 100}%`,
    delay: `${(i * 0.4) % 5}s`,
    duration: `${6 + (i * 0.7) % 8}s`
}));

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {PARTICLES.map((p) => (
                    <div
                        key={p.id}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration
                        }}
                    />
                ))}
            </div>

            {/* Radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        </div>
    );
};
