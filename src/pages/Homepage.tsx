import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import WalletCard from '@/components/Wallet'

const Homepage = () => {
  return (
    <div className='bg-gradient-to-b from-purple-500 to-indigo-600 h-screen w-screen'>
        <Header />
        <div className='flex px-10'>
            <div className='w-1/2'>
                <div className='text-6xl font-bold text-white my-5'>
                    Your Solana Wallet
                </div>
                <div className=' text-white text-2xl mb-5'>
                    Manage your SOL and SPL tokens with securely. Send, recieve and track your assests with ease.
                </div>
                <div>
                    <Button className='bg-white text-black hover:text-white'>Connect Wallet</Button>
                </div>
            </div>
            <div className='w-1/2'>
                <WalletCard />
            </div>
        </div>
    </div>
  )
}

export default Homepage