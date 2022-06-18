interface ItemGroupProps {
    [key:string]:any
}

export default function ItemGroup({ children }:ItemGroupProps) {
    return (
        <div className="flex flex-col space-y-5 divide-y">
            {children}
        </div>
    )
}