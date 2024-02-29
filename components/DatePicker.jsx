// 'use client'

// import { zodResolver } from '@hookform/resolvers/zod'
// import { CalendarIcon } from '@radix-ui/react-icons'
// import { format } from 'date-fns'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'
// import { Calendar } from '@/components/ui/calendar'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// // import { toast } from '@/components/ui/use-toast'

// const FormSchema = z.object({
//   dob: z.date({
//     required_error: 'A date of birth is required.',
//   }),
// })

// export function DatePicker() {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//   })

//   function onSubmit(data) {
//     toast({
//       title: 'You submitted the following values:',
//       description: (
//         <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
//           <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
//         <FormField
//           control={form.control}
//           name='dob'
//           render={({ field }) => (
//             <FormItem className='flex flex-col'>
//               <FormLabel>Publication Date</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={'outline'}
//                       className={cn(
//                         'w-[240px] pl-3 text-left font-normal',
//                         !field.value && 'text-muted-foreground'
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, 'PPP')
//                       ) : (
//                         <span>Pick a date</span>
//                       )}

//                       <CalendarIcon className='w-4 h-4 ml-auto opacity-50' />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className='w-auto p-0' align='start'>
//                   <Calendar
//                     mode='single'
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     disabled={(date) =>
//                       date > new Date() || date < new Date('1900-01-01')
//                     }
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </form>
//     </Form>
//   )
// }

'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker() {
  const [date, setDate] = React.useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='w-4 h-4 mr-2' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
