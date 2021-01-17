import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //tests whether the email field in the data has the correct form
  it('should contain a valid e-mail address with `@`', () => {
    service.getData().map(item => 
      expect(item.email).toContain('@')
    );
  })
});

