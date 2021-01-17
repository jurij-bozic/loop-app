import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputUserComponent } from './input-user.component';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('InputUserComponent', () => {
  let component: InputUserComponent;
  let fixture: ComponentFixture<InputUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatAutocompleteModule ],
      declarations: [ InputUserComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tests parsing existing Users from input text
  it('input text should have nameFinished=true only if parsed as User', () => {
    let testText = 'TestTest'
    let testDataValue = '';
    component.data.map(item => 
      (item.name == testText ? testDataValue = item.name : testDataValue = ''));
    component.myControl.setValue(testText); 
    component.parseUser();

    expect(component.selectedUsers[0].nameFinished).toBe(false) && expect(testDataValue).toBe('');
  });
});
