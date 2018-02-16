import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule} from '@angular/material';
import { HomeComponent } from './home.component';
import { MatIconModule} from "@angular/material/icon";
import { MatListModule} from "@angular/material/list";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [MatCardModule,
        MatIconModule,
        MatListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
