import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { IoMdAddCircleOutline } from "react-icons/io";
import BalanceCard from './BalanceCard';
import { generateMnemonic } from "bip39";
import { useToast } from '@/hooks/use-toast';
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

const WalletCard = () => {
    const [mnemonic, setMnemonic] = useState("");
    const { toast } = useToast()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const [secretKeys, setSecretKeys] = useState([]);
    const CustomDescription = ({mn} : {mn: string}) => {
        const words = mn.split(" ");
        return (
            <div>
                <div className="grid grid-cols-4">
                    {words.map((word) => (
                    <Card className='px-2 py-1 mx-2 my-1 flex justify-center items-center'>
                        <CardDescription>{word}</CardDescription>
                    </Card>
                    ))}
                </div>
                <Button
                    onClick={handleCopy}
                    className="text-sm font-medium mx-2 w-full my-2">
                    Copy
                </Button>
            </div>
        );
    };
    
      const handleCopy = () => {
        navigator.clipboard.writeText(mnemonic).then(() => {
          alert('Mnemonic copied!');
        });
      };
    
  return (
    <Card>
        <CardHeader className='flex-row justify-between'>
            <div>
                <CardTitle className='text-2xl'>Wallet Balance</CardTitle>
                <CardDescription className='text-md'>Your Current Sol Balance</CardDescription>
            </div>
                <Button 
                    onClick={async function() {
                        const mn = await generateMnemonic();
                        setMnemonic(mn)
                        toast({
                            title: "Save the Mnemonic",
                            description: <CustomDescription mn={mn} />,
                        })
                        const seed = mnemonicToSeed(mnemonic);
                        const path = `m/44'/501'/${currentIndex}'/0'`;
                        const derivedSeed = derivePath(path, seed.toString("hex")).key;
                        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
                        const keypair = Keypair.fromSecretKey(secret);
                        setCurrentIndex(currentIndex + 1);
                        setPublicKeys([...publicKeys, keypair.publicKey]);
                        setSecretKeys([...secretKeys, keypair.secretKey]);
                        }} 
                    className='flex gap-2 bg-transparent text-black hover:text-white'>
                    <IoMdAddCircleOutline /> Add Wallet
                </Button>
        </CardHeader>
    <CardContent>
        {publicKeys.map(p => <div>
            <BalanceCard publicKey={p.toBase58()} />
            </div>)}
    </CardContent>
    </Card>
  )
}

export default WalletCard