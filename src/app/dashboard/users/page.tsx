import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, MoreHorizontal, Edit, Trash2, UserPlus, ListFilter } from 'lucide-react';

// Placeholder data for users
const users = [
  { id: '1', name: 'Alex Wanderer', email: 'alex.wanderer@example.com', role: 'Admin', status: 'Active', joinedDate: '2023-01-15', avatarUrl: 'https://picsum.photos/seed/user1/40/40', avatarFallback: 'AW' },
  { id: '2', name: 'Sophia Lorenza', email: 'sophia.lorenza@example.com', role: 'Editor', status: 'Active', joinedDate: '2023-02-20', avatarUrl: 'https://picsum.photos/seed/user2/40/40', avatarFallback: 'SL' },
  { id: '3', name: 'Chris Beaches', email: 'chris.beaches@example.com', role: 'Author', status: 'Active', joinedDate: '2023-03-10', avatarUrl: 'https://picsum.photos/seed/user3/40/40', avatarFallback: 'CB' },
  { id: '4', name: 'Kenji Tanaka', email: 'kenji.tanaka@example.com', role: 'Author', status: 'Pending', joinedDate: '2024-05-01', avatarUrl: 'https://picsum.photos/seed/user4/40/40', avatarFallback: 'KT' },
  { id: '5', name: 'Chef Anh', email: 'chef.anh@example.com', role: 'Contributor', status: 'Inactive', joinedDate: '2023-04-05', avatarUrl: 'https://picsum.photos/seed/user5/40/40', avatarFallback: 'CA' },
];

export default function DashboardUsersPage() {
  return (
    <main className="flex-1 md:gap-8">
        <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
            <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage blog users and their roles.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                        </span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Admin</DropdownMenuItem>
                    <DropdownMenuItem>Editor</DropdownMenuItem>
                    <DropdownMenuItem>Author</DropdownMenuItem>
                    <DropdownMenuItem>Contributor</DropdownMenuItem>
                    <DropdownMenuSeparator />
                        <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Active</DropdownMenuItem>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuItem>Inactive</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" className="h-8 gap-1">
                    <UserPlus className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add User</span>
                </Button>
            </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Avatar</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">Role</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Joined</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell className="hidden sm:table-cell">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person face" />
                        <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                    </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="hidden md:table-cell">
                    <Badge variant={user.role === 'Admin' ? 'default' : user.role === 'Editor' ? 'secondary' : 'outline'}>
                        {user.role}
                    </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                            user.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' :
                            user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100' :
                            'bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100'
                        }`}>
                            {user.status}
                        </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.joinedDate}</TableCell>
                    <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>
            <CardFooter>
            <div className="text-xs text-muted-foreground">
            Showing <strong>1-5</strong> of <strong>{users.length}</strong> users
            </div>
        </CardFooter>
        </Card>
    </main>
  );
}
