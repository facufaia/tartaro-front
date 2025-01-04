// "use client";

// import { create } from "zustand";
// import { prisma } from "@/lib/prisma";

// export const usePaymentsStore = create((set, get) => ({
//   loading: false,
//   error: null,

//   createPayment: async (appointmentData, totalAmount) => {
//     set({ loading: true });
//     try {
//       const reservationFee = totalAmount * 0.3;

//       const payment = await prisma.$transaction(async (tx) => {
//         // Create payment record
//         const payment = await tx.payment.create({
//           data: {
//             userId: appointmentData.userId,
//             appointmentId: appointmentData.id,
//             amount: reservationFee,
//             paymentMethod: "mercadopago",
//             paymentType: "reservation",
//             status: "pending",
//           },
//           include: {
//             appointment: {
//               include: {
//                 doctor: {
//                   include: {
//                     user: true,
//                   },
//                 },
//               },
//             },
//           },
//         });

//         // Create invoice
//         await tx.invoice.create({
//           data: {
//             paymentId: payment.id,
//             appointmentId: appointmentData.id,
//             amount: reservationFee,
//             status: "pending",
//             details: `Reservation fee for appointment with Dr. ${payment.appointment.doctor.user.name}`,
//           },
//         });

//         // Generate MercadoPago checkout
//         const response = await fetch("/api/payments/mercadopago/create", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             paymentId: payment.id,
//             amount: reservationFee,
//             description: `Reservation fee for appointment with Dr. ${payment.appointment.doctor.user.name}`,
//           }),
//         });

//         const { initPoint } = await response.json();
//         return { payment, initPoint };
//       });

//       return payment.initPoint;
//     } catch (error) {
//       console.error("Error creating payment:", error);
//       set({ error: error.message });
//       return null;
//     } finally {
//       set({ loading: false });
//     }
//   },

//   processRefund: async (appointmentId) => {
//     set({ loading: true });
//     try {
//       const refund = await prisma.$transaction(async (tx) => {
//         // Get payment details
//         const payment = await tx.payment.findFirst({
//           where: { appointmentId },
//           include: {
//             appointment: true,
//           },
//         });

//         if (!payment) {
//           throw new Error("Payment not found");
//         }

//         // Create refund record
//         const refund = await tx.refund.create({
//           data: {
//             paymentId: payment.id,
//             userId: payment.userId,
//             amount: payment.amount,
//             status: "processing",
//           },
//         });

//         // Update payment and invoice status
//         await tx.payment.update({
//           where: { id: payment.id },
//           data: { status: "refunded" },
//         });

//         await tx.invoice.update({
//           where: { paymentId: payment.id },
//           data: { status: "cancelled" },
//         });

//         // Process refund through MercadoPago
//         const response = await fetch("/api/payments/mercadopago/refund", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ paymentId: payment.id }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to process refund in payment provider");
//         }

//         // Update refund status to completed
//         return await tx.refund.update({
//           where: { id: refund.id },
//           data: { status: "completed" },
//         });
//       });

//       return refund;
//     } catch (error) {
//       console.error("Error processing refund:", error);
//       set({ error: error.message });
//       return null;
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));
