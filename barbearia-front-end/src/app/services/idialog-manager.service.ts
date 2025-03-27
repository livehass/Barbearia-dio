import { ComponentType } from "@angular/cdk/portal";
import { Observable } from "rxjs";
import { YesNoDialogComponent } from "../commons/components/yes-no-dialog/yes-no-dialog.component";
import { DialogContent } from "../interfaces/dialog-content.interface";

export interface IDialogManagerService {

    showYesNoDialog(component: ComponentType<YesNoDialogComponent>, data: DialogContent): Observable<any>

}