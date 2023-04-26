import { ObjectState, CustomsHooks, CompUseRef, Memorize, Padre } from './components'

const AppHooks = ()=> (
    <div className="flex flex-col justify-center items-center my-20">
        <div>
            <h1 className="text-center font-semibold mt-10" >AppHooks</h1>
            <p className="italic">Aplicación para aprender los hooks de react.</p>
        </div>
        <br />
        <div className='w-4/5 md:w-3/12' >
            <ObjectState />
            <CustomsHooks />
            <CompUseRef />
            <Memorize />
            <Padre />
        </div>
       
    </div>
)

export default AppHooks