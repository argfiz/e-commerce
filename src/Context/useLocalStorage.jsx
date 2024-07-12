import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'



const useLocalStorage = () => {

    const { setAccount, setSignOut } = useContext(ShoppingCartContext)

    
            const accountInLocalStorage = localStorage.getItem('account')
            const signOutInLocalStorage = localStorage.getItem('sign-out')
            let parsedAccount
            let parsedSignOut

            if (!accountInLocalStorage) {
                localStorage.setItem('account', JSON.stringify({}))
                parsedAccount = {}
            } else {
                parsedAccount = JSON.parse(accountInLocalStorage)
                setAccount(parsedAccount)
            }

            if (!signOutInLocalStorage) {
                localStorage.setItem('sign-out', JSON.stringify(false))
                parsedSignOut = false
            } else {
                parsedSignOut = JSON.parse(signOutInLocalStorage)
                setSignOut(parsedSignOut)
            }
            
            return {
                parsedAccount,
                parsedSignOut
            }

    
}

export { useLocalStorage }

