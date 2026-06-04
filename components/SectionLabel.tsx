interface SectionLabelProps {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-foreground/40"></div>
      <span className="font-script text-2xl text-foreground/80 leading-none">
        {label}
      </span>
      <div className="w-8 h-px bg-foreground/40"></div>
    </div>
  )
}
