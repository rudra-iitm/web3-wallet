
import { useEffect, useState } from 'react';
import { Button } from './ui/button'
import axios from 'axios';
import { SendCard } from './SendCard';
import { Copy } from "lucide-react"

const BalanceCard = ({publicKey}: {publicKey: string}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const { data } = await axios({
        method: 'post',
        url: "https://solana-mainnet.g.alchemy.com/v2/4fdDQ-5hplRTTBV1xKTsjoiho5YKILJf",
        headers: {}, 
        data: {
            "jsonrpc": "2.0", "id": 1,
            "method": "getBalance",
            "params": [
                publicKey
            ]
        }
      });
      setBalance(data.result.value / 1000000000);
    }
    fetchBalance();
  }, [publicKey]);

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className='py-5'>
        <div className='text-4xl font-bold mb-4'>
            {balance} SOL
        </div>
        <div className='mb-4 flex gap-4 items-center'>
          {publicKey.slice(0, 30)}{publicKey.length > 30 ? '....' : ''}
          <Button 
            type="button" 
            size="sm" 
            className="px-3"
            variant={'ghost'} 
            onClick={handleCopy}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <SendCard />
    </div>
  )
}

export default BalanceCard