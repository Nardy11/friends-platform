import Link from 'next/link';
import {FriendsBrand} from './FriendsBrand';
export default function FriendsWordmark({href='/'}){return <Link href={href} className="friends-wordmark"><FriendsBrand/><span>Friends</span></Link>}
