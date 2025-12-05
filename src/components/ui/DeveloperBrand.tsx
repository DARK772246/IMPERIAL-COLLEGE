import React from 'react';

export function DeveloperBrand() {
  return (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        Developed by{' '}
        <span className="relative inline-block">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x text-lg tracking-wide">
            SALMAN KHAN
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </span>
      </p>
      <p className="text-xs text-muted-foreground mt-1 opacity-80">
        Passion for Discipline, Sports & Technology.
      </p>
    </div>
  );
}
