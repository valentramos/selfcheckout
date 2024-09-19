import { Calculator, Store, Warehouse, BarChartBig } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    Card,
} from "@/components/ui/card"


export function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-4">
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Calculator color="#FDC018"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Sistemas POS
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                        Ofrecemos una solución completa de gestión de ventas, inventario, clientes y empleados para optimizar las operaciones de tu negocio.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Store color="#FDC018"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                    Kioscos interactivos
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                        Brinda a los clientes información de productos, promociones y ofertas especiales, liberando al personal para tareas de mayor valor.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <Warehouse color="#FDC018"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                    Gestión de inventario
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                        Controla tu stock en tiempo real para evitar rupturas de stock, optimizar los niveles de inventario y minimizar costos.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="cursor-pointer">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Card className="transition ease-in-out hover:-translate-y-2 duration-300">
                            <div className=" flex items-center space-x-4 p-4">
                                <BarChartBig color="#FDC018"/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-md font-medium leading-none">
                                        Análisis de datos
                                    </p>
                                </div>
                            </div>
                        </Card>

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <p className="text-sm text-muted-foreground">
                        Obtén información valiosa sobre el comportamiento del cliente, las tendencias de compra y la efectividad de tus estrategias.
                        </p>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>    
    )
}