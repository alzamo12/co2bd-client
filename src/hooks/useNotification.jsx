import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useNotification = () => {
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();

    const { mutateAsync: notificationAsync } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/notification", data);
            return res.data
        },
        onSuccess: async (data) => {
            console.log('notification post api', data);
            queryClient.invalidateQueries("notification")
            queryClient.invalidateQueries("notificationCount")
        }
    })


    return notificationAsync
};

export default useNotification;