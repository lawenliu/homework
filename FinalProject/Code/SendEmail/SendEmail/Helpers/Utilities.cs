using SendEmail.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace SendEmail.Helpers
{
    public class Utilities
    {
        /// <summary>
        /// Send email to user to confirm.
        /// </summary>
        /// <param name="mailBody">email body</param>
        /// <param name="member"></param>
        public static string SendEmail(string to)
        {
            try
            {
                SmtpClient smtpClient = new SmtpClient("smtp.live.com");
                smtpClient.Port = 587;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("lwc541117@hotmail.com", "kwc541117@");
                smtpClient.EnableSsl = true;
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("lwc541117@hotmail.com", "CSC436 - Travel Now");
                mail.To.Add(to);
                mail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess | DeliveryNotificationOptions.OnFailure;
                mail.Subject = "No Reply: Profile for Travel Now has been updated!";
                mail.Body = "You profile for Travel Now has been updated. You can check or edit the current profile by clicking the user name on the up-right corner after you logon.";
                mail.BodyEncoding = System.Text.Encoding.UTF8;
                mail.SubjectEncoding = System.Text.Encoding.UTF8;
                mail.IsBodyHtml = true;

                smtpClient.Send(mail);
            }
            catch (Exception ex)
            {
                // Failed for email sendng
                return ex.Message;
            }

            return "Successfully";
        }
    }
}
