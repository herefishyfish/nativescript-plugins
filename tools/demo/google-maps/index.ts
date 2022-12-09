import { DemoSharedBase } from '../utils';
import { GoogleMap, MapReadyEvent, MapView } from '@nativescript/google-maps';
import { isIOS } from '@nativescript/core';

export class DemoSharedGoogleMaps extends DemoSharedBase {
	padding = 200;

	onReady(args: MapReadyEvent) {
		console.log('Map Ready');

		const map: GoogleMap = args.map;

		map.myLocationEnabled = true;

		map.uiSettings.myLocationButtonEnabled = true;
		map.uiSettings.mapToolbarEnabled = true;

		// map.native.setPadding(80, 80, 80, 80);

		if (isIOS) {
			map.native.padding = UIEdgeInsetsMake(70, 70, 70, 70);
		}
	}

	onLoaded(args) {
		const mapView = args.object as MapView;

		console.log(mapView.padding);

		console.log('Map Loaded');
	}

	testIt() {
		console.log('test google-maps!');
		this.padding = 100;
		this.notifyPropertyChange('padding', this.padding);
	}
}
