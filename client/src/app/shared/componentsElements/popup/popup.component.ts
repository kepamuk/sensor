import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-popup',
    template: `
        <div [attr.id]="popup"
             class="modal fade">
            <div class="modal-dialog modal-content">
                <button type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .modal-content {
            width: 720px;
        }

        button {
            width: 30px;
            height: 30px;
            line-height: 34px;
            border-radius: 50%;
            background-color: white;
            box-shadow: 2.5px 4.3px 10px rgba(0, 0, 0, 0.4);
            right: -14px;
            top: -14px;
            opacity: 1;
            color: #ff0000;
            position: absolute;
        }
        /*.modal-content {*/
            /*width: 100%;*/
        /*}*/
        @media screen and (max-width: 767px) {
            .modal-content {
                width: 90%;
                margin: 30px auto;
            }
        }
    `]
})
export class PopupComponent implements OnInit {

    @Input() popup;

    constructor() {
    }

    ngOnInit() {
        // тут нужен кэллбэк что то типо this.onLoad();
        // и так мы подвяжемся на инициализацию попапа
    }

}
