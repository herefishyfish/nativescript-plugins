import { ContentView, CoreTypes, paddingBottomProperty, paddingLeftProperty, paddingRightProperty, paddingTopProperty, Property } from '@nativescript/core';

export enum MapType {
	None = 'none',
	Normal = 'normal',
	Satellite = 'satellite',
	Terrain = 'terrain',
	Hybrid = 'hybrid',
}

export enum JointType {
	Round = 'round',
	Bevel = 'bevel',
	Default = 'default',
}

export const latProperty = new Property<MapViewBase, number>({
	name: 'lat',
});

export const lngProperty = new Property<MapViewBase, number>({
	name: 'lng',
});

export const zoomProperty = new Property<MapViewBase, number>({
	name: 'zoom',
});

export const bearingProperty = new Property<MapViewBase, number>({
	name: 'bearing',
});

export const tiltProperty = new Property<MapViewBase, number>({
	name: 'tilt',
});

export interface Padding {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export const mapPaddingProperty = new Property<MapViewBase, Padding>({
	name: 'padding',
	valueConverter: (value) => {
		console.log('valueConverter', value);
		if (typeof value === 'string') {
			const arr = value.split(/[ ,]+/).map((s) => parseInt(s));

			let top: number;
			let right: number;
			let bottom: number;
			let left: number;

			if (arr.length === 1) {
				top = arr[0];
				right = arr[0];
				bottom = arr[0];
				left = arr[0];
			} else if (arr.length === 2) {
				top = arr[0];
				bottom = arr[0];
				right = arr[1];
				left = arr[1];
			} else if (arr.length === 3) {
				top = arr[0];
				right = arr[1];
				left = arr[1];
				bottom = arr[2];
			} else if (arr.length === 4) {
				top = arr[0];
				right = arr[1];
				bottom = arr[2];
				left = arr[3];
			} else {
				throw new Error('Expected 1, 2, 3 or 4 parameters. Actual: ' + value);
			}

			return {
				top: top,
				right: right,
				bottom: bottom,
				left: left,
			};
		} else if (typeof value === 'number') {
			return {
				top: value,
				right: value,
				bottom: value,
				left: value,
			};
		} else {
			return value;
		}
	},
});

export const mapPaddingTopProperty = new Property<MapViewBase, number>({
	name: 'paddingTop',
	valueConverter: (value) => {
		return parseInt(value);
	},
});

export const mapPaddingRightProperty = new Property<MapViewBase, number>({
	name: 'paddingRight',
	valueConverter: (value) => {
		return parseInt(value);
	},
});

export const mapPaddingBottomProperty = new Property<MapViewBase, number>({
	name: 'paddingBottom',
	valueConverter: (value) => {
		return parseInt(value);
	},
});

export const mapPaddingLeftProperty = new Property<MapViewBase, number>({
	name: 'paddingLeft',
	valueConverter: (value) => {
		return parseInt(value);
	},
});

export class MapViewBase extends ContentView {
	static readyEvent = 'ready';
	static mapTapEvent = 'mapTap';
	static mapLongPressEvent = 'mapLongPress';
	static markerTapEvent = 'markerTap';
	static myLocationTapEvent = 'myLocationTap';
	static myLocationButtonTapEvent = 'myLocationButtonTap';
	static markerDragStartEvent = 'markerDragStart';
	static markerDraggingEvent = 'markerDragging';
	static markerDragEndEvent = 'markerDragEnd';

	static tileRenderingStartEvent = 'tileRenderingStart';
	static tileRenderingEndEvent = 'tileRenderingEnd';

	static cameraPositionEvent = 'cameraPosition';

	static circleTapEvent = 'circle';
	static polygonTapEvent = 'polygon';
	static polylineTapEvent = 'polyline';
	static poiTapEvent = 'poi';
	static groundOverlayTapEvent = 'groundOverlay';

	static infoWindowTapEvent = 'infoWindowTap';
	static infoWindowLongPressEvent = 'infoWindowLongPress';
	static infoWindowCloseEvent = 'infoWindowClose';

	static markerInfoContentsEvent = 'markerInfoContents';
	static markerInfoWindowEvent = 'markerInfoWindow';

	static activeBuildingEvent = 'activeBuilding';
	static activeLevelEvent = 'activeLevel';

	lat: number;
	lng: number;
	zoom: number;
	bearing: number;
	tilt: number;
	padding: Padding;
	paddingTop: CoreTypes.LengthType;
	paddingRight: CoreTypes.LengthType;
	paddingBottom: CoreTypes.LengthType;
	paddingLeft: CoreTypes.LengthType;
}

latProperty.register(MapViewBase);
lngProperty.register(MapViewBase);
zoomProperty.register(MapViewBase);
bearingProperty.register(MapViewBase);
tiltProperty.register(MapViewBase);
mapPaddingProperty.register(MapViewBase);
mapPaddingTopProperty.register(MapViewBase);
mapPaddingRightProperty.register(MapViewBase);
mapPaddingBottomProperty.register(MapViewBase);
mapPaddingLeftProperty.register(MapViewBase);
