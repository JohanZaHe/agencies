import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';
import { IAgency } from '../shared/models/agency.model';
import { agencyIcon } from './agency.icon';

@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss'],
})
export class AgencyMapComponent implements OnInit {
  @Input() agency: IAgency;

  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  mapIsRendered: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: 'X0kJRAs2exJdsfcZqqLPh-dNb5PuqQbp-JPPcYG8YZs',
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: { lat: this.agency.lat, lng: this.agency.lon },
          zoom: 15,
        }
      );

      map.addEventListener('render', (evt) => {
        console.log('rendered', this.agency.agencia);
      });

      onResize(this.mapDiv.nativeElement, () => {
        map.getViewPort().resize();
      });

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      this.map = map;

      this.listenRenderingState(map);
      this.addMarkerInTheMap();
    }
  }

  addMarkerInTheMap() {
    //Define the coordinates
    const locationOfMarker = { lat: this.agency.lat, lng: this.agency.lon };
    // Create a marker icon from an image URL:
    const icon = new H.map.Icon(agencyIcon, { size: { w: 29, h: 56 } });
    // Create a marker using the previously instantiated icon:
    const marker = new H.map.Marker(locationOfMarker, {
      data: locationOfMarker,
      icon: icon,
    });

    this.map.addObject(marker);
  }

  listenRenderingState(map) {
    map.getEngine().addEventListener('render', () => {
      if (map.getEngine().getState() === H.map.render.RenderState.DONE) {
        this.mapIsRendered = true;
      }
    });
  }
}
