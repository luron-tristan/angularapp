import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

/* -------------------------------
           Boilerplate :


     /-------------------------
     |          Title         |
     -------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
    `
})

export class SandboxComponent{

}
------------------------------- */

// /* 
//     /--------------------------
//     |        Loop *ngFor      |
//     --------------------------/
// */
// @Component({
//     selector: 'sandbox',
//     // templateUrl: `./sandbox.component.html`,
//     // styleUrls: [`./sandbox.component.css`],

//     template: `
//          <h1>Hello world</h1>

//          {{ people }}
//          <ul>
//              <li *ngFor="let person of people">
//                  {{ person }}
//              </li>
//          </ul>
//          {{ people }}
//          <ul>
//              <li *ngFor="let person of people; let i = index">
//                  {{ i+1 }} {{ person }}
//              </li>
//          </ul>
//          <ul>
//              <li *ngFor="let person of people2">
//                  {{ person.firstName }} {{ person.lastName }}
//              </li>
//          </ul>
//     `
// })

// export class SandboxComponent{
    
//     people = ['Rick', 'Daryl', 'Carl', 'Glen'];

//     people2 = [
//         {
//             firstName: 'Rick',
//             lastName: 'Grimes'
//         },
//         {
//             firstName: 'Daryl',
//             lastName: 'Dixon'
//         },
//         {
//             firstName: 'Carl',
//             lastName: 'Grimes'
//         },
//         {
//             firstName: 'Glen',
//             lastName: 'Rhee'
//         }
//     ];

//     constructor(){
//         this.people[2] = 'Carol';
//     }
// }


// /*
//     /--------------------------------
//     |        *ngIf & *ngSwitch      |
//     --------------------------------/
// */
// @Component({
//     selector: 'sandbox',
//     template: `
//     <h1>Hello 
//         <!--
//         <span *ngIf="showName">{{ name }}</span>
//         <span *ngIf="!showName">World</span>
//         -->
//         <span *ngIf="showName; else noName">{{ name }}</span>
//         <ng-template #noName>World</ng-template>

//         <p>Hello {{ showName ? name : 'World' }}</p>

//         <hr>

//         <div [ngSwitch]="greeting">
//             <div *ngSwitchCase="'1'">Hello World</div>
//             <div *ngSwitchCase="'2'">Hi there</div>
//             <div *ngSwitchCase="'3'">What's up ?</div>
//             <div *ngSwitchDefault>Hello</div>
//         </div>
//     </h1>`
// })

// export class SandboxComponent{

//     name:string = 'John Doe';
//     showName:boolean = true;
//     greeting:number = 3;
    
// }

// /*
//     /--------------------------------
//     |        Property binding       |
//     --------------------------------/
// */
// @Component({
//     selector: 'sandbox',
//     template: `
//         <h1>Hello World</h1>
//         <!--
//         3 ways to bind properties
//         <div><img src="{{ imageUrl }}"></div>
//         <div><img [src]="imageUrl"></div>
//         <div><img bind-src="imageUrl"></div>

//         <h4>Image Location : <span [textContent]="imageUrl"></span></h4>
//         -->

//         <hr>
//         <h2>Create Post</h2>
//         <p [hidden]="isUnchanged">Post has ben changed, please save</p>
//         <button [disabled]="isUnchanged">Save</button>
//     `
// })

// export class SandboxComponent{
    
//     imageUrl:string = 'http://lorempixel.com/400/200';
//     isUnchanged:boolean = false;
// }


//     /*
//         /--------------------------------------
//         |        Class binding @ ngClass      |
//         --------------------------------------/
//     */
// @Component({
//     selector: 'sandbox',
//     template: `
//         <h1>Hello World</h1>
//         <h4 [class.special]="isSpecial">This class binding is special</h4>
//         <h4 [ngClass]="currentClasses">This div is initially special and saveable</h4>
//     `,
//     styles: [
//         `
//             .special{
//                 color: green;
//             }

//             .saveable{
//                 text-transform: uppercase;
//             }
//         `
//     ]
// })

// export class SandboxComponent{

//     isSpecial:boolean = true;
//     canSave:boolean = true;
//     currentClasses = {};

//     constructor(){
//         this.setCurrentClasses();
//     }
        
//     setCurrentClasses(){
//         this.currentClasses = {
//             saveable:this.canSave,
//             special:this.isSpecial
//         }
//     }
// }


//     /*
//          /---------------------------------
//          |    Style binding & ngStyle     |
//          ---------------------------------/
//     */
// @Component({
//     selector: 'sandbox',
//     template: `
//         <h1>Hello World</h1>
//         <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">Font size depends on isSpecial</div>

//         <div [ngStyle]="currentStyles">This div is initially saveable and special</div>
//     `
// })

// export class SandboxComponent{
//     isSpecial:boolean = true;
//     canSave:boolean = true;
//     currentStyles = {};

//     constructor(){
//         this.setCurrentStyles();
//     }

//     setCurrentStyles(){
//         this.currentStyles = {
//             'font-style': this.canSave ? 'italic' : 'normal',
//             'font-size': this.isSpecial ? '24px' : '12px'
//         }
//     }
// }


//     /*
//         /--------------------
//         |    Using pipes     |
//         ---------------------/
//     */
// @Component({
//     selector: 'sandbox',
//     template:`
//         <h1>Hello World</h1>
//         <p>My birthday is {{ birthday | date | uppercase }}</p>
//         <p>My birthday is {{ birthday | date:"dd-MM-yy" }}</p>
//         <p>I was born in {{ birthday | date:"yyyy" }}</p>
//         <p>I love {{ 'cats' | uppercase }}</p>
//         <p>I hate {{ 'INSECTS' | lowercase }}</p>
//         <p>Your total is {{ total | currency:"GBP":"1" }}</p>
//         <p>Our fee is {{ fee | percent }}</p>
//     `
// })

// export class SandboxComponent{
//     birthday = new Date(1993, 2, 18);
//     total = 500;
//     fee = 0.5;
// }


//     /*
//         /--------------------
//         |    Mouse events    |
//         ---------------------/
//     */
// @Component({
//     selector: 'sandbox',
//     template:`
//         <h1>Hello World</h1>
//         <button id="btn" (click)="fireEvent($event)">Click Event</button>
//         <br>
//         <button id="btn2" (mouseover)="fireEvent($event)">Mouseover Event</button>
//         <br>
//         <button id="btn3" (mousedown)="fireEvent($event)">Mousedown Event</button>
//         <br>
//         <button id="btn4" (mouseup)="fireEvent($event)">Mouseup Event</button>
//         <br>
//         <button id="btn5" (dblclick)="fireEvent($event)">Double Click Event</button>
//         <br>
//         <button id="btn6" (drag)="fireEvent($event)">Drag Event</button>
//         <br>
//         <button id="btn6" (dragover)="fireEvent($event)">Drag Over Event</button>
//     `
// })

// export class SandboxComponent{
//     fireEvent(e){
//         // console.log('Button clicked');
//         // console.log(greeting);
//         console.log(e.type);
//     }
// }

// /*
//         /------------------------------------------
//         |      Changing Properties With Events     |
//         -------------------------------------------/
// */

// @Component({
//     selector: 'sandbox',
//     template:`
//         <h1>Hello World</h1>
//         <button (click)="changeValue()">Change Value</button>
//         <div *ngIf="value">
//             <h1>{{ text }}</h1>
//         </div>
//     `
// })

// export class SandboxComponent{
//     text:string = "Hello World";
//     value:boolean = true;

//     changeValue(){
//         // this.value = false;
//         this.value = !this.value;
//     }
// }

/*
        /-------------------------------------------
        |          Keyboard & Input Events         |
        -------------------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <div>
            <input type="text" (keyup)="fireEvent($event)" placeholder="keyup">
        </div>
        <div>
            <input type="text" (keydown)="fireEvent($event)" placeholder="keydown">
        </div>
        <div>
            <input type="text" (focus)="fireEvent($event)" placeholder="focus">
        </div>
        <div>
            <input type="text" (blur)="fireEvent($event)" placeholder="blur">
        </div>
        <div>
            <input type="text" (cut)="fireEvent($event)" placeholder="cut">
        </div>
        <div>
            <input type="text" (copy)="fireEvent($event)" placeholder="copy">
        </div>
        <div>
            <input type="text" (paste)="fireEvent($event)" placeholder="paste">
        </div>
        <hr>

        <div>
            <input type="text" (keyup)="changeText($event)" placeholder="change text" value="{{ text }}">
        </div>
        <h2>{{ text }}</h2>
    `
})

export class SandboxComponent{
    text:string = "Hello";
    fireEvent(e){
        console.log(e.type);

    }

    changeText(e){
        this.text = e.target.value;
    }
}
*/
/*
        /------------------------------------------------
        |          NgModel & 2 Way Data Binding         |
        ------------------------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <div class="container">
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="name" name="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="number" [(ngModel)]="age" name="age" class="form-control">
                </div>
                <input type="submit" value="Submit" class="btn btn-success">
            </form>

            <h4>Name: {{name}}</h4>
            <h4>Age: {{age}}</h4>
        </div>
    `
})

export class SandboxComponent{
    name:string = '';
    age:number = 0;
}
*/

/*
        /-----------------------------------
        |          Form Submission         |
        -----------------------------------/


@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name" name="name">
                </div>
                <input type="submit" class="btn btn-success" value="Submit">
            </form>
        </div>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}
            </li>
        </ul>
    `
})

export class SandboxComponent{
    name:string = '';
    users:string[] = ['John Doe', 'Mary Swanson', 'Kevin Smith'];

    onSubmit(){
        this.users.push(this.name);
        this.name = '';
    }
}
*/


/*
        /----------------------------------------------------
        |          Template Driven & Forms Validation       |
        ----------------------------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <div class="container">
            <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
                <div class="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        [(ngModel)] = "user.name"
                        name = "name"
                        #userName="ngModel"
                        minlength="2"
                        required
                    >
                    <div *ngIf="userName.errors?.required &&userName.touched" class="alert alert-danger">Name is required</div>
                    <div *ngIf="userName.errors?.minlength &&userName.touched" class="alert alert-danger">Name should be at least 2 characters</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        class="form-control"
                        [(ngModel)] = "user.email"
                        name = "email"
                        #userEmail="ngModel"
                        required
                    >
                    <div *ngIf="userEmail.errors?.required &&userEmail.touched" class="alert alert-danger">Email is required</div>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        class="form-control"
                        [(ngModel)] = "user.phone"
                        name = "phone"
                        #userPhone="ngModel"
                        minlength="10"
                    >
                    <div *ngIf="userPhone.errors?.minlength &&userPhone.touched" class="alert alert-danger">Enter a valid phone number</div>
                </div>
                <input type="submit" value="Submit" class="btn btn-success">
            </form>
        </div>
    `
})

export class SandboxComponent{
    user = {
        name : '',
        email : '',
        phone : ''
    }

    onSubmit({value, valid}){
        if(valid){
            console.log(value);
        } else {
            console.log("Form is invalid");
            
        }
    }
}

*/
/*
        /-------------------------------
        |          DataService         |
        -------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>
         `
    })

export class SandboxComponent{
    users:string[];
    constructor(public dataService:DataService)
    {
        this.users = this.dataService.getUsers();
    }
}
*/

/*
        /--------------------------------------------
        |          Working with Observables         |
        --------------------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let d of data">{{ d }}</li>
        </ul>
    `
    })

export class SandboxComponent{
    data:any[] = [];

    constructor(public dataService:DataService)
    {
        this.dataService.getData().subscribe(data => {
            // console.log(data);
            this.data.push(data);
        })
    }
}
*/

/*
        /-----------------------------------
        |          HTTP Module GET         |
        -----------------------------------/

@Component({
selector: 'sandbox',
template:`
    <h1>Hello World</h1>
    <div *ngFor="let user of users">
        <div class="well">
            <ul class="list-group">
                <li class="list-group-item">Name: {{ user.name }}
                </li>
                <li class="list-group-item">Email: {{ user.email }}
                </li>
                <li class="list-group-item">Phone: {{ user.phone }}
                </li>
            </ul>
            <br>
        </div>
    </div>
`
})

export class SandboxComponent{
    users:any[];

    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }
}
*/

/*
        /-----------------------------------------
        |      HTTP Module POST, DELETE, PUT     |
        -----------------------------------------/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        <form (submit)="onSubmit(isEdit)">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
            </div>
            <input type="submit" class="btn btn-success" value="Submit">
        </form>
        <hr>
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item">Name: {{ user.name }}
                    </li>
                    <li class="list-group-item">Email: {{ user.email }}
                    </li>
                    <li class="list-group-item">Phone: {{ user.phone }}
                    </li>
                </ul>
                <br>
                <button class="btn btn-primary btn-sm" (click)="onEditClick(user)">Edit</button>
                <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)">Delete</button>
                <br><br>
            </div>
        </div>
    `
})

export class SandboxComponent{
    users:any[];
    user = {
        id:'',
        name:'',
        email:'',
        phone:''
    }
    isEdit:boolean = false;
    
    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }

    onSubmit(isEdit){
        if(isEdit){
            this.dataService.updateUser(this.user).subscribe(user => {
                for(let i = 0; i < this.users.length; i++){
                    if(this.users[i].id == this.user.id){
                        this.users.splice(i, 1);
                    }
                }
                this.users.unshift(this.user);
            })
        } else {
            this.dataService.addUser(this.user).subscribe(user => {
                console.log(user);
                this.users.unshift(user);
            })
        }
    }

    onDeleteClick(id){
        this.dataService.deleteUser(id).subscribe(res => {
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].id == id){
                    this.users.splice(i, 1);
                }
            }
        })
    }

    onEditClick(user){
        this.isEdit = true;
        this.user = user;
    }

}
*/

@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
    `
})

export class SandboxComponent{

}
