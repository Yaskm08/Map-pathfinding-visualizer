import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

function GlobeView({ 
    startNode, 
    endNode, 
    pathData = [], 
    colors,
    onGlobeClick,
    globeViewState,
    setGlobeViewState 
}) {
    const globeEl = useRef();

    useEffect(() => {
        if (globeEl.current) {
            // Set initial camera position
            globeEl.current.pointOfView({
                lat: globeViewState?.latitude || 0,
                lng: globeViewState?.longitude || 0,
                altitude: 2.5
            });
            
            // Enable controls
            globeEl.current.controls().enableZoom = true;
            globeEl.current.controls().enableRotate = true;
        }
    }, [globeViewState]);

    // Convert pathfinding data to great circle arcs
    const arcsData = pathData.map((path, index) => ({
        startLat: path.path[0][1],
        startLng: path.path[0][0],
        endLat: path.path[1][1],
        endLng: path.path[1][0],
        color: colors[path.color] || colors.path,
        id: index
    }));

    // Points data for start/end nodes
    const pointsData = [
        ...(startNode ? [{
            lat: startNode.lat,
            lng: startNode.lon,
            size: 0.8,
            color: `rgba(${colors.startNodeFill.join(',')})`,
            label: 'Start'
        }] : []),
        ...(endNode ? [{
            lat: endNode.lat,
            lng: endNode.lon,
            size: 0.8,
            color: `rgba(${colors.endNodeFill.join(',')})`,
            label: 'End'
        }] : [])
    ];

    const handleGlobeClick = (point, event) => {
        if (onGlobeClick && point) {
            // Convert the 3D point to lat/lng
            const { lat, lng } = point;
            onGlobeClick({
                coordinate: [lng, lat],
                rightButton: event.button === 2
            });
        }
    };

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
                // Points (start/end nodes)
                pointsData={pointsData}
                pointLat={d => d.lat}
                pointLng={d => d.lng}
                pointColor={d => d.color}
                pointRadius={d => d.size}
                pointLabel={d => d.label}
                
                // Arcs (pathfinding paths)
                arcsData={arcsData}
                arcStartLat={d => d.startLat}
                arcStartLng={d => d.startLng}
                arcEndLat={d => d.endLat}
                arcEndLng={d => d.endLng}
                arcColor={d => `rgba(${d.color.slice(0,3).join(',')}, 0.8)`}
                arcStroke={0.5}
                arcAltitude={0.1}
                arcDashLength={0.9}
                arcDashGap={0.1}
                arcDashAnimateTime={3000}
                
                // Interaction
                onGlobeClick={handleGlobeClick}
                onGlobeRightClick={handleGlobeClick}
                
                // Styling
                backgroundColor="rgba(5, 5, 20, 1)"
                atmosphereColor="rgba(100, 150, 255, 0.3)"
                atmosphereAltitude={0.15}
                
                // Performance
                rendererConfig={{ antialias: true, alpha: true }}
            />
        </div>
    );
}

export default GlobeView;