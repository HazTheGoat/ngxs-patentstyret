import { IContact } from './contact.model';
import { State, Action, StateContext } from '@ngxs/store';

export class AddContact {
  static type = '[CONTACT] AddContact';

  constructor(public readonly payload: IContact) { }
}

@State<IContact[]>({
  name: 'contact',
  defaults: [
    { name: 'Arne' }
  ]
})
export class ContactState {
  @Action(AddContact)
  addContact({ getState, setState }: StateContext<IContact[]>, { payload }: AddContact) {
    setState([...getState(), payload]);
  }
}
