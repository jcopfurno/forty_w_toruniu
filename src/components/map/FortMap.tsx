import { Map, MapControls, MapMarker, MarkerContent } from "./ui/map";
import { MapPin } from "lucide-react";

type Coordinates = {
    longitude: number;
    latitude: number;
};

export function FortMap({ longitude, latitude}: Coordinates) {

    return (
        <div className="relative h-[420px] w-full">
        <Map center={[longitude, latitude]} zoom={11}>
            <MapMarker longitude={longitude} latitude={latitude}> 
            <MarkerContent>
                <MapPin color="#880808" />
            </MarkerContent>
            </MapMarker>
            <MapControls />
        </Map>
        </div>
    );
}