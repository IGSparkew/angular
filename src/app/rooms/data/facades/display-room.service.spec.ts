import { TestBed } from '@angular/core/testing';

import { DisplayRoomService } from './display-room.service';

describe('DisplayRoomService', () => {
  let service: DisplayRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
