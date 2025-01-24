import { AbstractControl,} from "@angular/forms";

export function smallCharactersValidator(control:AbstractControl) {
    const value = control.value;

    if(!value){
      return null;
    }

    if(value !== value?.toLowerCase()){
      return {minusculo:true};
    }

    return null;
}
